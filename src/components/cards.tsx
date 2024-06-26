import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";

export function MagicCardGradient() {
  return (
    <MagicContainer
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
      }
    >
      <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl text-pretty">
        <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-1000 dark:text-gray-300">
          ¿Que buscamos?
        </p>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </MagicCard>
    </MagicContainer>
  );
}
