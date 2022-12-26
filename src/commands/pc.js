const desktop = {
  name: 'DESKTOP',
  ram: '16gb',
  mem: 'SSD: 240gb / HDD: 1tb',
  cpu: 'i5 7400',
  gpu: 'gtx 1050ti',
}

const m1 = {
  name: 'MACBOOK PRO M1 14, 2021',
  ram: '16gb',
  mem: 'SSD: 1tb',
  cpu: 'M1',
  gpu: '',
}


const getPcConfig = (setup) => `| ${setup.name} - RAM: ${setup.ram} - MEM: ${setup.mem} - CPU: ${setup.cpu} - GPU: ${setup.gpu} |`

const pc = {
  "!pc": [getPcConfig(desktop), getPcConfig(m1)]
}

module.exports = {
  pc
}


