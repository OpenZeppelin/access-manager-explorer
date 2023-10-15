import BaseSkeleton from "@/components/skeleton";

const Skeleton = () => {
  return (
    <>
      <BaseSkeleton className="w-full h-9" />
      <BaseSkeleton className="w-full h-4" my="3" />
      <BaseSkeleton className="w-full h-4" my="3" />
      <BaseSkeleton className="w-full h-4" my="3" />
      <BaseSkeleton className="w-full h-4" my="3" />
    </>
  );
};

export default Skeleton;
