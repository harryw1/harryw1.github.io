const SectionTitle = ({ children, subtitle, centered = false }) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className={`section-title ${centered ? 'mx-auto after:left-1/2 after:-translate-x-1/2' : ''}`}>
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
