interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPrev: () => void;
    onNext: () => void;
  }
  
  export function Pagination({
    currentPage,
    totalPages,
    onPrev,
    onNext,
  }: PaginationProps) {
    return (
      <div className="flex justify-center mt-4 space-x-2">
        <button
          className="w-8 h-8 border rounded text-sm disabled:opacity-50"
          onClick={onPrev}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <button
          className="w-8 h-8 border rounded text-sm disabled:opacity-50"
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    );
  }