import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import ContentPage from '@/pages/ContentPage'
import RoadmapPage from '@/pages/RoadmapPage'
import ScenarioPage from '@/pages/ScenarioPage'
import ToolPage from '@/pages/ToolPage'
import QuizPage from '@/pages/QuizPage'
import HandoutPage from '@/pages/HandoutPage'
import SlidesPage from '@/pages/SlidesPage'
import MessageBoardPage from '@/pages/MessageBoardPage'
import MeetingPage from '@/pages/MeetingPage'
import GlossaryPage from '@/pages/GlossaryPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/content/:moduleId" element={<ContentPage />} />
        <Route path="/scenario/:id" element={<ScenarioPage />} />
        <Route path="/tools/:toolId" element={<ToolPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/:type" element={<QuizPage />} />
        <Route path="/slides" element={<SlidesPage />} />
        <Route path="/slides/:slideId" element={<SlidesPage />} />
        <Route path="/handout" element={<HandoutPage />} />
        <Route path="/messages" element={<MessageBoardPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/meetings/:id" element={<MeetingPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
      </Routes>
    </Layout>
  )
}
