
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Head>
        <title>Markazul Uloom Al Islamia Bangladesh</title>
      </Head>
      <header>
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
        <Image src="/banner.jpg" alt="Banner" width={800} height={100} />
      </header>
      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1rem',
        padding: '2rem'
      }}>
        {[
          ['পরিচিতি', 'প্রতিষ্ঠানের বিস্তারিত তথ্য'],
          ['বিভাগসমূহ', 'শিক্ষার বিভিন্ন বিভাগ'],
          ['শিক্ষা কার্যক্রম', 'পাঠ্যসূচি ও কোর্স'],
          ['শিক্ষকমণ্ডলী', 'আমাদের শিক্ষকমণ্ডলী'],
          ['লাইব্রেরি', 'পাঠাগার সুবিধা'],
          ['হোস্টেল সুবিধা', 'আবাসিক সুবিধাদি'],
          ['ফি ও বেতন', 'শিক্ষা খরচের তথ্য'],
          ['দাতা ও সহযোগীগণ', 'আমাদের সহযোগীরা'],
          ['ফটো গ্যালারি', 'ছবির সংগ্রহ'],
          ['ভিডিও গ্যালারি', 'ভিডিও সংগ্রহ']
        ].map(([title, desc], idx) => (
          <div key={idx} style={{
            borderRadius: '12px',
            background: '#e0f7f1',
            padding: '1rem',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </main>
      <footer style={{ padding: '1rem', fontSize: '0.8rem' }}>
        &copy; ২০২৫ মারকাজুল উলুম আল ইসলামিয়া বাংলাদেশ
      </footer>
    </div>
  )
}
