import TextRevealByWord from "@/components/magicui/text-reveal";

export function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg bg-white text-center">
      <TextRevealByWord
        text="Ahora comienza el cambio en tu forma de transportarte"
        className="text-center"
      />
    </div>
  );
}
