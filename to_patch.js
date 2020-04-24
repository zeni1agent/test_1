//------------------TO_PATCH------------------

const toPath = s => {
  const isPoints = Array.isArray(s)
  const isGroup = isPoints ? (Array.isArray(s[ 0 ])) : (s.type === 'g')
  const points = isPoints ? s : (isGroup ? s.shapes.map(shp => toPoints(shp)) : toPoints(s))

  if (isGroup) {
    return points.map(p => pointsToD(p))
  }

  return pointsToD(points)
}
