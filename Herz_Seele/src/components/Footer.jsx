export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {year} Herz&Seele – Informationsseite rund um Depressionen.</p>
        <p className="small">Diese Seite bietet Informationen und ersetzt keine professionelle Behandlung.</p>
      </div>
    </footer>
  );
}