import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/login.css'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')
   const navigate = useNavigate()

   const handleSubmit = async e => {
      e.preventDefault()

      try {
         const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
         })

         const result = await res.json()
         setMessage(result.message)
      } catch (err) {
         setMessage('Something went wrong. Try again.')
      }
   }

   return (
      <section style={{ backgroundColor: 'black' }}>
         <Container>
            <Row>
               <Col lg='6' className='m-auto'>
                  <div className='login__form'>
                     <h2>Forgot Password</h2>
                     <Form onSubmit={handleSubmit}>
                        <FormGroup>
                           <input
                              type='email'
                              placeholder='Enter your registered email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                           />
                        </FormGroup>
                        <Button className='btn secondary__btn auth__btn' type='submit'>
                           Send Reset Link
                        </Button>
                     </Form>
                     {message && <p style={{ color: 'white', marginTop: '1rem' }}>{message}</p>}
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default ForgotPassword
