import { cn } from '@/lib/utils';

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: string;
}

const ImageSkeleton = ({ className, aspectRatio = '4/3' }: ImageSkeletonProps) => {
  return (
    <div
      className={cn('relative overflow-hidden bg-muted rounded-lg', className)}
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default ImageSkeleton;
