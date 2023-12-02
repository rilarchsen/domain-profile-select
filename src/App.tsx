import Card from "./components/Card.tsx";
import RichardProfile from "./assets/richard_profile.jpg";

function App() {
  return (
    <section key="1" className="w-screen h-screen bg-gray-950 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center space-x-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <Card name={"Richard Avenia"} image={RichardProfile} href={"https://richard.avenia.dk"}/>
          <Card name={"David Avenia"} disabled image={"https://target.scene7.com/is/image/Target/GUEST_27556c59-356f-44c0-9142-0bf4465e116c?wid=488&hei=488&fmt=pjpeg"} href={"#"}/>
          <Card name={"Gabriel Avenia"} disabled image={"https://www.babymonitorsdirect.co.uk/wp-content/uploads/2021/04/Childhome-Sitting-Teddy-Bear-100cm.png"} href={"#"}/>
        </div>
      </div>
    </section>
  )
}

export default App