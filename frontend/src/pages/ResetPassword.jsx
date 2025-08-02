import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/login.css'
import { BASE_URL } from '../utils/config'

const ResetPassword = () => {
   const { token } = useParams()
   const [newPassword, setNewPassword] = useState('')
   const [message, setMessage] = useState('')
   const navigate = useNavigate()

   const handleSubmit = async e => {
      e.preventDefault()

      try {
         const res = await fetch(`${BASE_URL}/auth/reset-password`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, newPassword }),
         })

         const result = await res.json()
         if (res.ok) {
            setMessage(result.message)
            setTimeout(() => navigate('/login'), 2000)
         } else {
            setMessage(result.message || 'Error resetting password.')
         }
      } catch (err) {
         setMessage('Something went wrong.')
      }
   }

   return (
      <section style={{ backgroundColor: 'black' }}>
         <Container>
            <Row>
               <Col lg='6' className='m-auto'>
                  <div className='login__form'>
                     <h2>Reset Password</h2>
                     <Form onSubmit={handleSubmit}>
                        <FormGroup>
                           <input
                              type='password'
                              placeholder='Enter new password'
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              required
                           />
                        </FormGroup>
                        <Button className='btn secondary__btn auth__btn' type='submit'>
                           Reset Password
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

export default ResetPassword
