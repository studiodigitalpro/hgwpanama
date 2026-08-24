import React, { useState, useEffect } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  className?: string;
  fallbackContent?: React.ReactNode;
}

export function getCandidateImageUrls(rawUrl?: string): string[] {
  if (!rawUrl || typeof rawUrl !== 'string') return [];

  const trimmed = rawUrl.trim();
  if (!trimmed) return [];

  // Check if it's a Google Drive link or ID
  const gDriveMatch =
    trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/googleusercontent\.com\/d\/([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/googleusercontent\.com\/u\/\d+\/d\/([a-zA-Z0-9_-]+)/);

  if (gDriveMatch && gDriveMatch[1]) {
    const id = gDriveMatch[1];
    return [
      `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
      `https://lh3.googleusercontent.com/d/${id}`,
      `https://wsrv.nl/?url=drive.google.com/uc?id=${id}&w=1000`,
      `https://images.weserv.nl/?url=drive.google.com/uc?id=${id}&w=1000`,
      `https://drive.google.com/uc?export=view&id=${id}`,
    ];
  }

  // Check if it's an external web URL
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    const cleanNoProto = trimmed.replace(/^https?:\/\//, '');
    return [
      trimmed,
      `https://wsrv.nl/?url=${encodeURIComponent(cleanNoProto)}`,
      `https://images.weserv.nl/?url=${encodeURIComponent(cleanNoProto)}`,
      `https://wsrv.nl/?url=${encodeURIComponent(trimmed)}`,
      `https://images.weserv.nl/?url=${encodeURIComponent(trimmed)}`,
    ];
  }

  return [trimmed];
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  fallbackContent,
  onError,
  ...rest
}) => {
  const [candidates, setCandidates] = useState<string[]>(() => getCandidateImageUrls(src));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hasFailedAll, setHasFailedAll] = useState<boolean>(false);

  useEffect(() => {
    const newCandidates = getCandidateImageUrls(src);
    setCandidates(newCandidates);
    setCurrentIndex(0);
    setHasFailedAll(newCandidates.length === 0);
  }, [src]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (currentIndex + 1 < candidates.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setHasFailedAll(true);
      if (onError) {
        onError(e);
      }
    }
  };

  if (hasFailedAll || candidates.length === 0) {
    if (fallbackContent) {
      return <>{fallbackContent}</>;
    }
    return (
      <div className={`flex items-center justify-center bg-slate-100 text-slate-400 text-xs font-semibold p-2 ${className}`}>
        {alt || 'Imagen no disponible'}
      </div>
    );
  }

  const currentSrc = candidates[currentIndex];

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      referrerPolicy="no-referrer"
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      className={className}
      {...rest}
    />
  );
};

