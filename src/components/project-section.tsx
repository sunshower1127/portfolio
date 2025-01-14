import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";

export default function ProjectSection({
  children,
  className,
  zink,
  ...props
}: { zink?: boolean } & HTMLMotionProps<"section">) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      viewport={{
        once: false, // 매번 애니메이션 실행
        margin: "-100px", // 뷰포트 경계 설정
      }}
      transition={{
        duration: 0.5, // 0.5초
        ease: "easeOut", // 부드러운 감속
        delay: 0.2, // 0.2초 지연
      }}
      className={clsx("flex flex-col items-center pt-5 pb-40 [&_]:gap-10", { "bg-zinc-100": zink }, className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
