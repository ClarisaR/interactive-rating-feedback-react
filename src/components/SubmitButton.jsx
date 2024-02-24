
import React from 'react'

export default function SubmitButton({disabled}) {
  const styles = `button button-${disabled?'disabled':'enabled'}`
  return (
    <button type="submit" className={styles} disabled={disabled} >Submit</button>
  )
}
