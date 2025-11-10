// @flow strict

import Image from "next/image";

function Blog() {
  const certifications = [
    {
      title: "ORACLE",
      items: [
        "Oracle Database 19c Admin Professional Credential"
      ],
      image: "/png/o.png"
    },
    {
      title: "ORACLE",
      items: [
        "Oracle Cloud Infr Infrastructure 2025 Data Science Professional"
      ],
      image: "/png/o.png"
    },
    {
      title: "Cloud & Data (Coursera)",
      items: [
        "Google Cloud Big Data and Machine Learning Fundamentals",
      ], image: "/png/image.png"
    },
    {
      title: "Cloud & Data (Coursera)",
      items: [
        "Google Cloud Data Analytics",
      ],image: "/png/b.png"
    },
    {
      title: "Cloud & Data (Coursera)",
      items: [
        "Virtual Networks in Azure",
      ] , image: "/png/p.jpg"
    },
    {
      title: "Cloud & Data (Coursera)",
      items: [
        "Python for Data Science, AI and Development (IBM)"
      ]
    },
    {
      title: "Containerization (Coursera)",
      items: [
        "Introduction to Containers with Docker and Kubernetes"
      ] , image: "/png/a.jpg"
    },
    {
      title: "Cloud & Data (Coursera)",
      items: [
        " Cloud Computing Basics",
      ], image: "/png/n.jpg"
    },
    {
      title: "Microsoft Azure",
      items: [
        "DP-900: Azure Data Fundamentals and AZ-900: Azure Fundamentals (in progress)"
      ]
    },
  ];

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A89A] to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#D4B5A5]"></span>
          <span className="bg-[#D4B5A5] w-fit text-white p-2 px-5 text-xl rounded-md">
            CERTIFICATIONS
          </span>
          <span className="w-24 h-[2px] bg-[#D4B5A5]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="group border border-[#E8D3C8] hover:border-[#D4B5A5] transition-all duration-500 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl"
          >
            {/* Image Section */}
            {cert.image ? (
              <div className="h-48 w-full overflow-hidden bg-gradient-to-br from-[#F7DED7] to-[#E8D3C8] flex items-center justify-center p-6">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={400}
                  height={300}
                  className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="h-48 w-full bg-gradient-to-br from-[#F7DED7] to-[#E8D3C8] flex items-center justify-center">
                <span className="text-[#D4B5A5] text-lg font-medium">Badge à venir</span>
              </div>
            )}

            {/* Content Section */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-[#D4B5A5] mb-3 text-center border-b border-[#E8D3C8] pb-2">
                {cert.title}
              </h3>
              <ul className="space-y-2">
                {cert.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-[#D4B5A5] mr-2 mt-1 text-xs">✓</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;