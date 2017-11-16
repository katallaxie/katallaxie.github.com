// initial state
const init = {
  name: 'Sebastian Döll.',
  job: 'Software Engineer at Axel Springer.',
  teaser: 'Crafting software with great user experiences.',
  experience: [
    {
      company: 'Axel Springer <span>Senior Engineer</span>',
      time: '2017&mdash;present'
    },
    {
      company: 'Accenture <span>Tech Lead</span>',
      time: '2015&mdash;2016'
    },
    {
      company: 'FSU Jena <span>Research Associate</span>',
      time: '2004&mdash;2010'
    },
    {
      company: 'Freelancer <span>Developer</span>',
      time: '2004&mdash;2015'
    },
    {
      company: 'IBM <span>Lead Developer</span>',
      time: '2002&mdash;2004'
    }
  ],
  education: [
    {
      school: 'PhD <span>FSU Jena</span>',
      time: '2010&mdash;present'
    },
    {
      school: 'PhD Programm <span>DFG Training Group</span>',
      time: '2010&mdash;2014'
    },
    {
      school: 'Diploma <span>Economics @FSU Jena</span>',
      time: '2004&mdash;2010'
    }
  ],
  coding: [
    'Go',
    'TypeScript',
    'JavaScript',
    'PHP',
    'HTML & CSS',
    'Ruby'
  ],
  tech: [
    'React (Native)',
    'Angular',
    'Vue',
    'Electron',
    'GraphQL',
    'REST'
  ],
  devOps: [
    'Mesos',
    'Marathon',
    'Docker',
    'Jenkins',
    'Terraform',
    'Jenkins'
  ]
}

// getters
const getters = {
  name: state => state.name,
  job: state => state.job,
  teaser: state => state.teaser,
  experience: state => state.experience,
  education: state => state.education,
  coding: state => state.coding,
  devOps: state => state.devOps,
  tech: state => state.tech
}

// actions
const actions = {

}

// mutations
const mutations = {

}

export default {
  state: init,
  getters,
  actions,
  mutations
}
