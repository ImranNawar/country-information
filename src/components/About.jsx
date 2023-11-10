import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <p className="text-xl m-5 p-5">Welcome to our Country Information website! We make it easy for you to access useful
          information about any country in the world. With a simple search in our user-friendly
          search bar, you can discover a wealth of data about your chosen country, including its
          Official Name, Capital, Population, Region, Languages, Timezone, Area, Currencies and much more.
          Whether you are a
          traveler planning your next adventure, a student working on a project, or simply curious
          about the world, our platform provides a convenient and efficient way to explore the diverse
          and fascinating aspects of countries across the globe.</p>
      </div>
      <Footer />
    </div>
  )
}

export default About;