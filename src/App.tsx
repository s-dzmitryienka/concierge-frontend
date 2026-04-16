import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAuthStore } from './stores/authStore'
import { createChatStore } from './stores/chatStore'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProtectedRoute from './pages/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import KnowledgeBase from './pages/KnowledgeBase'
import Settings from './pages/Settings'
import Analytics from './pages/Analytics'
import Toast from 'react-hot-toast'

const queryClient = new QueryClient()

export default function App() {
  const authStore = createAuthStore()
  const chatStore = createChatStore()

  React.useEffect(() => {
    const updateChatStore = (newMessages: any[]) => {
      chatStore.setMessages(newMessages)
    }
    // In real app, this would subscribe to WebSocket or polling
    return updateChatStore
  }, [chatStore])

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/knowledge" element={<KnowledgeBase />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </React.StrictMode>
  )
}