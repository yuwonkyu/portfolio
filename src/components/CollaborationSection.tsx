interface CollaborationSectionProps {
  items: {
    title: string;
    description: string;
  }[];
}

const CollaborationSection = ({ items }: CollaborationSectionProps) => {
  return (
    <section id="collaboration" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-8 sm:mb-12">
          <p className="text-sm font-semibold tracking-[0.24em] uppercase text-[color:var(--accent-primary)] mb-3">
            Collaboration
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-main mb-4 leading-tight">
            협업을 통해 배우고, 팀 안에서 역할을 넓혀 온 경험
          </h2>
          <p className="text-second text-base sm:text-lg leading-relaxed max-w-3xl">
            협업은 역할을 나누는 것에 그치지 않고, 질문하고 조율하고 기준을 맞추는
            과정까지 포함된다고 생각합니다.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article className="rounded-[1.75rem] border border-[rgba(41,95,86,0.16)] bg-[rgba(41,95,86,0.08)] p-6 sm:p-7 shadow-[0_18px_42px_rgba(41,95,86,0.08)]">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="rounded-full border border-[rgba(41,95,86,0.14)] bg-white/70 px-3 py-1 text-xs font-medium text-[color:var(--accent-primary)]">
                Collaboration Note
              </span>
              <span className="text-third text-xs">00</span>
            </div>
            <h3 className="text-xl font-bold text-main mb-3 leading-snug">
              빠르게 배우고,
              <br />
              팀에 기여하는 방식
            </h3>
            <p className="text-sm sm:text-[0.95rem] text-second leading-7">
              비전공자로 시작했지만 질문하고 공유하는 태도로 팀 안에서 빠르게
              학습했습니다. 갈등 조율, 팀장 경험, 배포 실패와 재정비를 거치며
              협업에서 필요한 책임감과 판단 기준을 배웠습니다.
            </p>
          </article>

          {items.map((item, index) => (
            <article
              key={item.title}
              className="surface-card rounded-[1.75rem] p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="badge-soft rounded-full px-3 py-1 text-xs font-medium">
                  Collaboration Case
                </span>
                <span className="text-third text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-main mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-second leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
