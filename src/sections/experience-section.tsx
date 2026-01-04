import Section from "../components/section";

export default function ExperienceSection() {
  const experience = [
    {
      image: "/assets/nagarro.png",
      title: "Associate Staff Engineer",
      company: "Nagarro Software Pvt. Ltd.",
      location: "Gurugram, Haryana",
      start: "Jan 2024",
      end: "Dec 2024",
      description: [
        "Lead end-to-end development of large-scale, high-performance systems used by millions of users.",
        "Mentor junior engineers, conduct code reviews, and uphold engineering best practices.",
      ],
    },
    {
      image: "/assets/walkover.png",
      title: "Senior Frontend Developer",
      company: "Walkover",
      location: "Indore",
      start: "Jun 2020",
      end: "Oct 2024",
      description: [
        "Full-stack development of large-scale, high-performance systems used by millions of users.",
        "Mentor junior engineers, conduct code reviews, and uphold engineering best practices.",
      ],
    },
    {
      image: "/assets/walkover.png",
      title: "Senior Software Engineer",
      company: "Byte Labby",
      location: "Indore",
      start: "May 2019",
      end: "Jun 2020",
      description: [
        "Full-stack development of large-scale, high-performance systems used by millions of users.",
        "Mentor junior engineers, conduct code reviews, and uphold engineering best practices.",
      ],
    },
    {
      image: "/assets/vatsana.jpg",
      title: "Senior Frontend Developer",
      company: "Vatsana Technologies Pvt. Ltd",
      location: "Indore",
      start: "Mar 2018",
      end: "Mar 2019",
      description: [
        "Full-stack development of large-scale, high-performance systems used by millions of users.",
        "Mentor junior engineers, conduct code reviews, and uphold engineering best practices.",
      ],
    },
    {
      image: "/assets/vatsana.jpg",
      title: "UI/UX Developer",
      company: "Vatsana Technologies Pvt. Ltd",
      location: "Indore",
      start: "Feb 2016",
      end: "Feb 2017",
      description: [
        "Full-stack development of large-scale, high-performance systems used by millions of users.",
        "Mentor junior engineers, conduct code reviews, and uphold engineering best practices.",
      ],
    },
  ];

  return (
    <Section title="Experience">
      <div className="space-y-6 w-full">
        {experience.map((experience, index) => (
          <div
            key={index}
            className="w-full border border-gray-200 p-6 rounded-xl"
          >
            <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  {experience.company === "Byte Labby" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-building2 lucide-building-2 size-5"
                    >
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                      <path d="M10 6h4"></path>
                      <path d="M10 10h4"></path>
                      <path d="M10 14h4"></path>
                      <path d="M10 18h4"></path>
                    </svg>
                  ) : (
                    <img
                      src={experience.image}
                      alt={experience.title}
                      width={25}
                      height={25}
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800">
                    {experience.title}
                  </h3>
                  <div>{experience.company}</div>
                </div>
              </div>
              <div>
                {experience.start} - {experience.end}
              </div>
            </div>
            {/* <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
              {experience.description.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
    </Section>
  );
}
