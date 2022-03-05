const formatMes = (mes) => {
  if (mes == 1) return 'JAN'
  if (mes == 2) return 'FEV'
  if (mes == 3) return 'MAR'
  if (mes == 4) return 'ABR'
  if (mes == 5) return 'MAI'
  if (mes == 6) return 'JUN'
  if (mes == 7) return 'JUL'
  if (mes == 8) return 'AGO'
  if (mes == 9) return 'SET'
  if (mes == 10) return 'OUT'
  if (mes == 11) return 'NOV'
  if (mes == 12) return 'DEZ'
}

const filtroResults = (string) =>
  string.split('T').map((item) => item.split('.', 1))

const hora = (string) => string[1].map((item) => item.split(':', 2))

const data = (string) =>
  string[0].map((item) => item.replace('2022', '').split('-').reverse())

const formatDateAndTime = (dateAndTime) => {
  const removeT = dateAndTime.replace('T', ' ')
  return removeT.split('.', 1)
}

const formatDayPorcentage = (dayPorcentage) => {
  if (dayPorcentage < 20) {
    return dayPorcentage * 4
  } else if (dayPorcentage > 20 && dayPorcentage < 40) {
    return dayPorcentage * 2
  } else if (dayPorcentage > 40 && dayPorcentage < 100) {
    return dayPorcentage
  } else if (dayPorcentage > 100) {
    return dayPorcentage / 20
  }
}

export {
  formatMes,
  filtroResults,
  hora,
  data,
  formatDateAndTime,
  formatDayPorcentage,
}
