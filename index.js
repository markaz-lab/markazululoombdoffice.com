export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <img src="/banner.jpg" alt="Banner" style={{ width: '100%' }} />
      <h1 style={{ color: '#00796b' }}>মারকাজুল উলুম আল-ইসলামিয়া বাংলাদেশ</h1>
      <p>এটি একটি ডাইনামিক ওয়েবসাইটের ডেমো। ইনশাআল্লাহ ভবিষ্যতে আরও ফিচার যুক্ত হবে।</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
        {['পরিচিতি','বিভাগসমূহ','শিক্ষা কার্যক্রম','শিক্ষকমণ্ডলী','লাইব্রেরি','হোস্টেল সুবিধা','ফি ও বেতন','দাতা ও সহযোগীগণ','ফটো গ্যালারি','ভিডিও গ্যালারি'].map(title => (
          <div style={{ backgroundColor: '#e0f2f1', padding: '1rem', borderRadius: '8px' }} key={title}>
            <h3>{title}</h3>
            <p>তথ্য শীঘ্রই আসছে...</p>
          </div>
        ))}
      </div>
    </main>
  );
}