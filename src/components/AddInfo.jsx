import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddInfo = () => {
    const [kitap, setKitap]=useState("")
    const [yazar, setYazar]=useState("")
    const [isbn, setIsbn]=useState("")
    const [kapak, setKapak]=useState("")
    const [tur, setTur]=useState("")
    const [tarih, setTarih]=useState("")
    
    const HandleSubmit=(e)=>{
        e.preventDefault()
        

        setKitap("")
        setYazar("")
        setIsbn("")
        setKapak("")
        setTur("")
        setTarih("")
    }
    
  return (
    <Form className='container' onSubmit={HandleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Kitap Adı</Form.Label>
      <Form.Control type="text" placeholder="Kitap Adı" required
     value={kitap}   onChange={(e)=>setKitap(e.target.value)}
      />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword" 
    >
      <Form.Label>Yazar Adı</Form.Label>
      <Form.Control type="text" placeholder="Yazar Adı" required 
value={yazar} onChange={(e)=>setYazar(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>ISBN</Form.Label>
      <Form.Control type="text" placeholder="ISBN" required 
value={isbn} onChange={(e)=>setIsbn(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Kapak Resmi</Form.Label>
      <Form.Control type="file"  accept="image/*" required 
value={kapak} onChange={(e)=>setKapak(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Tür</Form.Label>
      <Form.Control type="text" placeholder="Tür" required 
value={tur} onChange={(e)=>setTur(e.target.value)}

      />
      <Form.Text className="text-muted">
      Birden fazla seçenek varsa slash ile ayırabilirsiniz.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Yayınlanma Tarihi</Form.Label>
      <Form.Control type="text" placeholder="Yayınlanma Tarihi" required 
       value={tarih} onChange={(e)=>setTarih(e.target.value)}
      />
    </Form.Group>
   
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default AddInfo