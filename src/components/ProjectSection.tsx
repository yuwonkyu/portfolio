import { useEffect, useRef, useState } from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";

interface ProjectSectionProps {
  id: string;
  title: string;
  bgGradient: string;
  projects: ProjectData[];
  enableCarousel?: boolean;
  sectionTitleColor?: string;
  colorScheme: {
    bg: string;
    border: string;
    titleColor: string;
    descColor: string;
    techBg: string;
    techText: string;
    buttonBg: string;
    buttonHover: string;
  };
}

const ProjectSection = ({
  id,
  title,
  bgGradient,
  projects,
  enableCarousel = false,
  sectionTitleColor,
  colorScheme,
}: ProjectSectionProps) => {
  const [virtualIndex, setVirtualIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef<number | null>(null);
  const draggedRef = useRef(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const showCarousel = enableCarousel && projects.length > 0;
  const trackProjects: ProjectData[] = projects;
  const currentIndex = virtualIndex;

  useEffect(() => {
    setVirtualIndex(0);
  }, [projects.length, enableCarousel]);

  const handlePrev = () => {
    if (projects.length <= 1) {
      return;
    }

    setVirtualIndex((prev) => {
      const next = prev - 1;
      return next < 0 ? 0 : next;
    });
  };

  const handleNext = () => {
    if (projects.length <= 1) {
      return;
    }

    setVirtualIndex((prev) => {
      const maxIndex = projects.length - 1;
      const next = prev + 1;
      return next > maxIndex ? maxIndex : next;
    });
  };

  const isInteractiveElement = (target: EventTarget | null) => {
    if (!(target instanceof HTMLElement)) {
      return false;
    }

    return Boolean(target.closest("button, a"));
  };

  const startDrag = (clientX: number, target: EventTarget | null) => {
    if (isInteractiveElement(target)) {
      return;
    }

    dragStartXRef.current = clientX;
    draggedRef.current = false;
    setIsDragging(true);
    setDragOffset(0);
  };

  const moveDrag = (clientX: number) => {
    if (dragStartXRef.current === null) {
      return;
    }

    const diffX = clientX - dragStartXRef.current;
    if (Math.abs(diffX) > 6) {
      draggedRef.current = true;
    }

    setDragOffset(diffX);
  };

  const endDrag = (clientX: number) => {
    if (dragStartXRef.current === null) {
      setIsDragging(false);
      return;
    }

    const diffX = clientX - dragStartXRef.current;
    const viewportWidth = viewportRef.current?.offsetWidth ?? 1;
    const threshold = Math.max(70, viewportWidth * 0.18);

    if (Math.abs(diffX) >= threshold) {
      draggedRef.current = true;
      if (diffX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }

    dragStartXRef.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    startDrag(event.clientX, event.target);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    moveDrag(event.clientX);
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    endDrag(event.clientX);
  };

  const handleMouseLeave = () => {
    dragStartXRef.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    if (!touch) {
      return;
    }

    startDrag(touch.clientX, event.target);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    if (!touch) {
      return;
    }

    moveDrag(touch.clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    if (!touch) {
      return;
    }

    endDrag(touch.clientX);
  };

  const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!draggedRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    draggedRef.current = false;
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <section id={id} className={`min-h-screen ${bgGradient} flex items-center`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20">
        <h2
          className={`text-2xl sm:text-4xl font-bold ${sectionTitleColor ?? colorScheme.titleColor} text-center mb-6 sm:mb-12`}
          style={
            sectionTitleColor
              ? {
                  textShadow:
                    "0 0 6px rgba(0,0,0,0.6), 0 0 12px rgba(0,0,0,0.4), 0 0 2px rgba(0,0,0,0.8)",
                }
              : undefined
          }
        >
          {title}
        </h2>

        {showCarousel ? (
          <div className="max-w-5xl mx-auto">
            <div
              ref={viewportRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClickCapture={handleClickCapture}
              onDragStart={handleDragStart}
              className={`overflow-hidden select-none ${
                isDragging ? "cursor-grabbing" : "cursor-auto"
              }`}
              title="좌우로 드래그해서 프로젝트 이동"
            >
              <div
                className={`flex ${isDragging ? "" : "transition-transform duration-500 ease-out"}`}
                style={{
                  transform: `translateX(calc(${-virtualIndex * 100}% + ${dragOffset}px))`,
                  willChange: "transform",
                }}
              >
                {trackProjects.map((project, index) => (
                  <div
                    key={`${project.id}-${index}`}
                    className="w-full shrink-0 px-1"
                  >
                    <ProjectCard project={project} colorScheme={colorScheme} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => {
                    setVirtualIndex(index);
                  }}
                  aria-label={`${project.title}로 이동`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === index
                      ? "w-16 bg-white"
                      : "w-8 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                colorScheme={colorScheme}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
