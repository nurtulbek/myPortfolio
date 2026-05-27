const styles = `
  @keyframes scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  .track {
    display: flex;
    width: max-content;
    animation: scroll 15s linear infinite;x
  }
`;

function Banner({ items }: {items: string[]}) {
  const doubled = [...items, ...items]; // duplicate for seamless loop

  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <style>{styles}</style>
      <div className="track">
        {doubled.map((item, i) => (
          <span key={i} style={{ padding: '0 2rem' }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default Banner;