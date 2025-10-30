const BlogTag = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex justify-start gap-1 capitalize">
      {tags?.map((x, idx) => (
        <div
          className="mb-3 text-[#389E0D] text-[12px] font-bold bg-[#D9F7BE] w-max px-2 py-1 rounded-[4px]"
          key={Math.random() + idx}
        >
          {x}
        </div>
      )) ?? (
        <div className="mb-3 text-[#389E0D] text-[12px] font-bold bg-[#D9F7BE] w-max px-2 py-1 rounded-[4px]">
          ECOMMERCE
        </div>
      )}
    </div>
  );
};
export default BlogTag;
