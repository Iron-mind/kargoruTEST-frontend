import {useParams} from 'react-router-dom'
import EditForm from '../components/EditForm'
 export default function EditQuotation() {
   let {id} = useParams()
  return(
    <div className='EditQuotationView'>
      <h1 className='py-5'>Tu cotizacion</h1>

      <EditForm id={id}/>
    </div>
  )
}
