export default function About() {
  const aboutText =
    "Brightforge is a modern platform for managing and showcasing products with precision and flexibility. " +
    "Designed for teams who need full control over how their products are represented, " +
    "Brightforge brings together item customization, media organization, and " +
    "performance insights in one unified system.";

  const ourMissionText =
    "To forge clarity from complexity — empowering creators, retailers, and developers " +
    "to manage every aspect of their product catalog through an intuitive and transparent experience.";

  const coreFeatures = [
    "Centralized Product Management",
    "Variant Tracking",
    "Inventory Insights",
    "Rich Media Integration",
    "Customer Feedback and Ratings",
  ];

  return (
    <>
      <div
        className={
          "grid w-full h-full justify-center items-center text-primary-foreground  justify-items-center content-center "
        }
      >
        <h1 className={"underline mb-6"}>The Brightforge Mission</h1>
        <article className={"grid gap-4 items-center justify-items-center"}>
          <section
            className={
              "bg-midnightSteel p-4 rounded-xl shadow-xl grid gap-4 w-1/2"
            }
          >
            <h2>About Brightforge </h2>
            <p>{aboutText}</p>
          </section>
          <section
            className={
              "bg-midnightSteel p-4 rounded-xl shadow-xl grid gap-4 w-1/2"
            }
          >
            <h2>Our Mission</h2>
            <p>{ourMissionText}</p>
          </section>
          <section
            className={
              "bg-midnightSteel p-4 rounded-xl shadow-xl grid gap-4 w-1/2"
            }
          >
            <h2>Core Features</h2>
            <ul className={"list-disc ml-4"}>
              {coreFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}
