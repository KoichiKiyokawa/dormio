import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'

const FirestoreProvider: React.FC = ({ children }) => {
  console.log('FirestoreProvider')
  useFirestoreConnect([
    { collection: 'managerLocation' },
    { collection: 'notices' },
    { collection: 'mealOrders' },
    { collection: 'messages', orderBy: ['createdAt', 'desc'] },
    { collection: 'users' }
  ])
  return <>{children}</>
}

export default FirestoreProvider
