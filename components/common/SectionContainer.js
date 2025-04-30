const SectionContainer = ({ children, className = '', id }) => {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
