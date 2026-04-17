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
        <div className="max-w-3xl mb-8 sm:mb-12">
          <p className="text-sm font-semibold tracking-[0.24em] uppercase text-emerald-300 mb-3">
            Collaboration
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-main mb-4">
            함께 일할 때 중요하게 보는 기준
          </h2>
          <p className="text-second text-base sm:text-lg leading-relaxed">
            협업은 단순히 작업을 나누는 일이 아니라, 다른 사람이 이어서 작업하기
            쉬운 상태를 만드는 일이라고 생각합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <article
              key={item.title}
              className="surface-card rounded-[1.75rem] border border-slate-800/80 p-6 sm:p-7"
            >
              <h3 className="text-xl font-semibold text-main mb-3">
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
