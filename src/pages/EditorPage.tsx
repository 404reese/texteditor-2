import { Link } from "react-router-dom"
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"

export default function EditorPage() {
  return (
    <div className="editor-page-container">
      <header className="editor-page-header">
        <div className="header-left">
          <Link to="/" className="back-link">
            <svg
              className="back-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
        <div className="header-center">
          <span className="app-title-badge">Text Editor v2</span>
        </div>
        <div className="header-right">
          <div className="status-indicator">
            <span className="dot pulse"></span>
            <span>Sync</span>
          </div>
        </div>
      </header>

      <main className="editor-main-content">
        <div className="editor-card">
          <SimpleEditor />
        </div>
      </main>
    </div>
  )
}
