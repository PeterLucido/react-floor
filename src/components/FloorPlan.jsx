import Kitchen from './Kitchen'
import Bedroom from './Bedroom'
import Bath from './Bath'


function FloorPlan() {
  return (
      <div>
          <Bedroom BedNum='1'/>
          <Kitchen/>
          <Bath size='Full'/>
          <Bedroom BedNum='2'/>
          <Bath size='Half'/>
          <Bedroom BedNum='3'/>
      </div>
  )
}

export default FloorPlan