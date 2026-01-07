import Section from "../components/section";

export default function EducationSection() {
  const educations = [
    {
      college: "Central India Institute of Technology",
      image: "/assets/ciit-college.webp",
      degree: "Master Of Computer Application",
      location: "Indore",
      start: "2011",
      end: "2014",
      description:
        "Mentor junior engineers, conduct code reviews, and uphold engineering best practices. Mentor junior engineers, conduct code reviews, and uphold engineering best practices.",
    },
    {
      college: "Christian Eminent College",
      image: "/assets/christianeminent-college.jpg",
      degree: "Bachelor Of Computer Application",
      location: "Indore",
      start: "2007",
      end: "2010",
      description:
        "Mentor junior engineers, conduct code reviews, and uphold engineering best practices.Mentor junior engineers, conduct code reviews, and uphold engineering best practices.",
    },
  ];
  return (
    <Section title="Education">
      <div className="space-y-6 w-full">
        {educations.map((education) => (
          <div
            className="w-full border border-gray-200 p-6 rounded-xl"
            key={education.degree}
          >
            <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <img
                    src={education.image}
                    alt="Education"
                    width={25}
                    height={25}
                    className="size-5.5"
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-white">
                    {education.degree}
                  </h3>
                  <div className="dark:text-white">{education.college}</div>
                </div>
              </div>
              <div className="dark:text-white">
                {education.start} - {education.end}
              </div>
            </div>
            {/* <p className="mt-6 text-gray-500">{education.description}</p> */}
          </div>
        ))}
      </div>
    </Section>
  );
}
