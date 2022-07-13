import {useParams} from 'react-router-dom'
import EditForm from '../components/EditForm'
 export default function EditQuotation() {
   let {id} = useParams()
   console.log(id);
  return(
    <div className='EditQuotationView'>
      <h1 >Tu cotizacion</h1>

      <EditForm id={id}/>
    </div>
  )
}
