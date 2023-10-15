import BaseSkeleton from "@/components/skeleton";

const Skeleton = () => {
  return (
    <>
      <BaseSkeleton mt="6" className="w-full h-9" />
      <BaseSkeleton className="w-full h-1" my="3" />
      <BaseSkeleton className="w-full h-5" my="3" />
      <BaseSkeleton className="w-full h-5" my="3" />
      <BaseSkeleton className="w-full h-5" my="3" />
      <BaseSkeleton className="w-full h-5" my="3" />
    </>
  );
};

export default Skeleton;
