const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="border border-gray-500 radius-md rounded-xl shadow p-4 flex flex-col items-center">
          <img src='./public/Code.png' id="skill-icon" className="object-contain mb-2"/>
          <h2 className="font-semibold text-lg text-white font-md mb-2 mt-3">Languages</h2>
          <p className="text-white text-base text-sm">HTML5, CSS3, JavaScript (ES5, ES6)</p>
        </div>
        <div className="border border-gray-500 radius-md rounded-xl shadow p-4 flex flex-col items-center">
          <img src='./public/Framework.png' id="skill-icon" className="object-contain mb-2" />
          <h2 className="font-semibold text-lg text-white font-md mb-2 mt-3">Frameworks</h2>
          <p className="text-white text-base text-sm">Bootstrap, jQuery, React, Redux, Express, Mongoose</p>
        </div>
        <div className="border border-gray-500 radius-md rounded-xl shadow p-4 flex flex-col items-center">
          <img src='./public/Version.png' id="skill-icon" className="object-contain mb-2" />
          <h2 className="font-semibold text-lg text-white font-md mb-2 mt-3">Version Control</h2>
          <p className="text-white text-base text-sm">Git and Github</p>
        </div>
        <div className="border border-gray-500 radius-md rounded-xl shadow p-4 flex flex-col items-center">
          <img src='./public/Design.png' id="skill-icon" className="object-contain mb-2" />
          <h2 className="font-semibold text-lg text-white font-md mb-2 mt-3">Design</h2>
          <p className="text-white text-base text-sm">Figma, Photopea</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;
