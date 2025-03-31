'use client';

import React, { useState } from 'react';
import {
  Home,
  FileText,
  Calendar,
  PlusCircle,
  CheckCircle,
  MessageSquare,
  Database,
  Edit3,
  Bell,
  Book,
  Settings,
  ChevronDown,
  Search,
  ClipboardCheck,
  Layers,
  ExternalLink,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

const OverviewPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCardExpand = (id: number) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <div className='flex w-64 flex-col border-r border-gray-200 bg-white'>
        <div className='border-b border-gray-200 p-4'>
          <h1 className='text-2xl font-bold text-orange-500'>ContentFlow.ai</h1>
        </div>

        <nav className='flex-1 p-4'>
          <div className='space-y-1'>
            <button
              className={`flex w-full items-center space-x-3 rounded-lg p-3 ${activeTab === 'dashboard' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <Home size={20} />
              <span>Dashboard</span>
            </button>

            <button
              className={`flex w-full items-center space-x-3 rounded-lg p-3 ${activeTab === 'content' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('content')}
            >
              <FileText size={20} />
              <span>Content Projects</span>
            </button>

            <button
              className={`flex w-full items-center space-x-3 rounded-lg p-3 ${activeTab === 'review' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('review')}
            >
              <Edit3 size={20} />
              <span>Review Queue</span>
            </button>

            <button
              className={`flex w-full items-center space-x-3 rounded-lg p-3 ${activeTab === 'published' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('published')}
            >
              <Database size={20} />
              <span>Published Content</span>
            </button>

            <button
              className={`flex w-full items-center space-x-3 rounded-lg p-3 ${activeTab === 'calendar' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('calendar')}
            >
              <Calendar size={20} />
              <span>Content Calendar</span>
            </button>

            <button
              className={`flex w-full items-center space-x-3 rounded-lg p-3 ${activeTab === 'templates' ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('templates')}
            >
              <Layers size={20} />
              <span>Templates</span>
            </button>
          </div>

          <div className='mt-8'>
            <h3 className='text-xs font-semibold tracking-wider text-gray-500 uppercase'>
              Integrations
            </h3>
            <div className='mt-2 space-y-1'>
              <button className='flex w-full items-center justify-between rounded-lg p-3 text-gray-600 hover:bg-gray-100'>
                <div className='flex items-center space-x-3'>
                  {/* Placeholder for Integration Icon */}
                  <div className='h-6 w-6 rounded bg-gray-200'></div>
                  <span>Notion</span>
                </div>
                <span className='rounded-full bg-green-100 px-2 py-1 text-xs text-green-800'>
                  Connected
                </span>
              </button>

              <button className='flex w-full items-center justify-between rounded-lg p-3 text-gray-600 hover:bg-gray-100'>
                <div className='flex items-center space-x-3'>
                  {/* Placeholder for Integration Icon */}
                  <div className='h-6 w-6 rounded bg-gray-200'></div>
                  <span>Google Docs</span>
                </div>
                <span className='rounded-full bg-green-100 px-2 py-1 text-xs text-green-800'>
                  Connected
                </span>
              </button>

              <button className='flex w-full items-center justify-between rounded-lg p-3 text-gray-600 hover:bg-gray-100'>
                <div className='flex items-center space-x-3'>
                  {/* Placeholder for Integration Icon */}
                  <div className='h-6 w-6 rounded bg-gray-200'></div>
                  <span>Framer</span>
                </div>
                <span className='rounded-full bg-green-100 px-2 py-1 text-xs text-green-800'>
                  Connected
                </span>
              </button>
            </div>
          </div>
        </nav>

        <div className='border-t border-gray-200 p-4'>
          <button className='flex w-full items-center space-x-3 rounded-lg p-3 text-gray-600 hover:bg-gray-100'>
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-1 flex-col overflow-hidden'>
        {/* Top Bar */}
        <header className='flex items-center justify-between border-b border-gray-200 bg-white p-4'>
          <div className='flex items-center space-x-4'>
            <h2 className='text-xl font-semibold'>Dashboard</h2>
          </div>

          <div className='flex items-center space-x-4'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search projects...'
                className='rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:outline-none'
              />
              <Search
                size={18}
                className='absolute top-2.5 left-3 text-gray-400'
              />
            </div>

            <button className='relative rounded-full p-2 hover:bg-gray-100'>
              <Bell size={20} />
              <span className='absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500'></span>
            </button>

            <div className='flex items-center space-x-2'>
              {/* Placeholder for User Avatar */}
              <div className='h-8 w-8 rounded-full bg-gray-200'></div>
              <ChevronDown size={16} />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className='flex-1 overflow-y-auto p-6'>
          {/* Dashboard Content */}
          {activeTab === 'dashboard' && (
            <div className='space-y-6'>
              {/* Stats Row */}
              <div className='grid grid-cols-4 gap-4'>
                <div className='rounded-lg bg-white p-6 shadow-sm'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <p className='text-sm font-medium text-gray-500'>
                        Total Projects
                      </p>
                      <p className='mt-1 text-2xl font-semibold'>24</p>
                    </div>
                    <div className='rounded-lg bg-blue-50 p-2'>
                      <FileText size={20} className='text-blue-500' />
                    </div>
                  </div>
                  <div className='mt-2'>
                    <p className='text-xs text-green-600'>
                      +12% from last month
                    </p>
                  </div>
                </div>

                <div className='rounded-lg bg-white p-6 shadow-sm'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <p className='text-sm font-medium text-gray-500'>
                        Awaiting Review
                      </p>
                      <p className='mt-1 text-2xl font-semibold'>7</p>
                    </div>
                    <div className='rounded-lg bg-yellow-50 p-2'>
                      <Edit3 size={20} className='text-yellow-500' />
                    </div>
                  </div>
                  <div className='mt-2'>
                    <p className='text-xs text-yellow-600'>3 high priority</p>
                  </div>
                </div>

                <div className='rounded-lg bg-white p-6 shadow-sm'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <p className='text-sm font-medium text-gray-500'>
                        Published
                      </p>
                      <p className='mt-1 text-2xl font-semibold'>18</p>
                    </div>
                    <div className='rounded-lg bg-green-50 p-2'>
                      <CheckCircle size={20} className='text-green-500' />
                    </div>
                  </div>
                  <div className='mt-2'>
                    <p className='text-xs text-green-600'>+5 this week</p>
                  </div>
                </div>

                <div className='rounded-lg bg-white p-6 shadow-sm'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <p className='text-sm font-medium text-gray-500'>
                        AI Tokens Used
                      </p>
                      <p className='mt-1 text-2xl font-semibold'>243K</p>
                    </div>
                    <div className='rounded-lg bg-purple-50 p-2'>
                      <MessageSquare size={20} className='text-purple-500' />
                    </div>
                  </div>
                  <div className='mt-2'>
                    <p className='text-xs text-gray-600'>
                      42% of monthly limit
                    </p>
                  </div>
                </div>
              </div>

              {/* Workflow Summary */}
              <div className='rounded-lg bg-white p-6 shadow-sm'>
                <h3 className='mb-4 text-lg font-medium'>Active Workflow</h3>

                <div className='relative'>
                  {/* Workflow Steps */}
                  <div className='relative z-10 mb-8 flex items-center justify-between'>
                    <div className='text-center'>
                      <div className='mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600'>
                        <PlusCircle size={20} />
                      </div>
                      <p className='mt-2 text-sm font-medium'>Request</p>
                    </div>

                    <div className='text-center'>
                      <div className='mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600'>
                        <MessageSquare size={20} />
                      </div>
                      <p className='mt-2 text-sm font-medium'>AI Generate</p>
                    </div>

                    <div className='text-center'>
                      <div className='mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600'>
                        <FileText size={20} />
                      </div>
                      <p className='mt-2 text-sm font-medium'>Google Docs</p>
                    </div>

                    <div className='text-center'>
                      <div className='mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600'>
                        <Edit3 size={20} />
                      </div>
                      <p className='mt-2 text-sm font-medium'>Review</p>
                    </div>

                    <div className='text-center'>
                      <div className='mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600'>
                        <ClipboardCheck size={20} />
                      </div>
                      <p className='mt-2 text-sm font-medium'>Format</p>
                    </div>

                    <div className='text-center'>
                      <div className='mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600'>
                        <Database size={20} />
                      </div>
                      <p className='mt-2 text-sm font-medium'>Notion</p>
                    </div>

                    <div className='text-center'>
                      <div className='mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600'>
                        <CheckCircle size={20} />
                      </div>
                      <p className='mt-2 text-sm font-medium'>Complete</p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  <div
                    className='absolute top-5 left-0 h-0.5 w-full bg-orange-200'
                    style={{ zIndex: 0 }}
                  ></div>
                </div>

                <div className='mt-6 flex justify-end'>
                  <button className='flex items-center space-x-2 rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-700'>
                    <span>Start New Content Request</span>
                    <PlusCircle size={18} />
                  </button>
                </div>
              </div>

              {/* Recent Content Projects */}
              <div>
                <div className='mb-4 flex items-center justify-between'>
                  <h3 className='text-lg font-medium'>
                    Recent Content Projects
                  </h3>
                  <button className='text-sm font-medium text-orange-600 hover:text-orange-700'>
                    View all
                  </button>
                </div>

                <div className='space-y-3'>
                  {/* Project Card 1 */}
                  <div
                    className={`overflow-hidden rounded-lg bg-white shadow-sm ${expandedCard === 1 ? 'border-l-4 border-yellow-500' : ''}`}
                  >
                    <div
                      className='flex cursor-pointer items-center justify-between p-4'
                      onClick={() => toggleCardExpand(1)}
                    >
                      <div className='flex items-center space-x-3'>
                        <div className='rounded-lg bg-yellow-50 p-2'>
                          <Edit3 size={20} className='text-yellow-500' />
                        </div>
                        <div>
                          <h4 className='font-medium'>
                            Eco-Friendly Product Landing Page
                          </h4>
                          <p className='text-sm text-gray-500'>
                            Awaiting review • Created 2 days ago
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-gray-400 transition-transform ${expandedCard === 1 ? 'rotate-180 transform' : ''}`}
                      />
                    </div>

                    {expandedCard === 1 && (
                      <div className='border-t border-gray-100 px-4 pt-2 pb-4'>
                        <div className='space-y-3'>
                          <div className='flex items-start space-x-3'>
                            <div className='mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100'>
                              <CheckCircle
                                size={12}
                                className='text-green-600'
                              />
                            </div>
                            <div>
                              <p className='text-sm font-medium'>
                                Content generated by Claude AI
                              </p>
                              <p className='text-xs text-gray-500'>
                                March 29, 2025 at 2:14 PM
                              </p>
                            </div>
                          </div>

                          <div className='flex items-start space-x-3'>
                            <div className='mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100'>
                              <CheckCircle
                                size={12}
                                className='text-green-600'
                              />
                            </div>
                            <div>
                              <p className='text-sm font-medium'>
                                Google Doc created for review
                              </p>
                              <p className='text-xs text-gray-500'>
                                March 29, 2025 at 2:15 PM
                              </p>
                            </div>
                          </div>

                          <div className='flex items-start space-x-3'>
                            <div className='mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-100'>
                              <AlertCircle
                                size={12}
                                className='text-yellow-600'
                              />
                            </div>
                            <div>
                              <p className='text-sm font-medium'>
                                Awaiting your review and approval
                              </p>
                              <div className='mt-2 flex space-x-2'>
                                <button className='flex items-center space-x-1 rounded border border-gray-300 bg-white px-3 py-1.5 text-sm hover:bg-gray-50'>
                                  <ExternalLink size={14} />
                                  <span>Open in Google Docs</span>
                                </button>
                                <button className='flex items-center space-x-1 rounded bg-orange-600 px-3 py-1.5 text-sm text-white hover:bg-orange-700'>
                                  <CheckCircle size={14} />
                                  <span>Approve Content</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Card 2 */}
                  <div
                    className={`overflow-hidden rounded-lg bg-white shadow-sm ${expandedCard === 2 ? 'border-l-4 border-green-500' : ''}`}
                  >
                    <div
                      className='flex cursor-pointer items-center justify-between p-4'
                      onClick={() => toggleCardExpand(2)}
                    >
                      <div className='flex items-center space-x-3'>
                        <div className='rounded-lg bg-green-50 p-2'>
                          <CheckCircle size={20} className='text-green-500' />
                        </div>
                        <div>
                          <h4 className='font-medium'>
                            Company About Us Page Refresh
                          </h4>
                          <p className='text-sm text-gray-500'>
                            Published to Notion • 1 day ago
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-gray-400 transition-transform ${expandedCard === 2 ? 'rotate-180 transform' : ''}`}
                      />
                    </div>

                    {expandedCard === 2 && (
                      <div className='border-t border-gray-100 px-4 pt-2 pb-4'>
                        <div className='space-y-3'>
                          <div className='flex items-start space-x-3'>
                            <div className='mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100'>
                              <CheckCircle
                                size={12}
                                className='text-green-600'
                              />
                            </div>
                            <div>
                              <p className='text-sm font-medium'>
                                Content approved and formatted
                              </p>
                              <p className='text-xs text-gray-500'>
                                March 30, 2025 at 10:22 AM
                              </p>
                            </div>
                          </div>

                          <div className='flex items-start space-x-3'>
                            <div className='mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100'>
                              <CheckCircle
                                size={12}
                                className='text-green-600'
                              />
                            </div>
                            <div>
                              <p className='text-sm font-medium'>
                                Published to Notion database
                              </p>
                              <p className='text-xs text-gray-500'>
                                March 30, 2025 at 10:23 AM
                              </p>
                              <div className='mt-2'>
                                <button className='flex items-center space-x-1 rounded border border-gray-300 bg-white px-3 py-1.5 text-sm hover:bg-gray-50'>
                                  <ExternalLink size={14} />
                                  <span>View in Notion</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Card 3 */}
                  <div
                    className={`overflow-hidden rounded-lg bg-white shadow-sm ${expandedCard === 3 ? 'border-l-4 border-blue-500' : ''}`}
                  >
                    <div
                      className='flex cursor-pointer items-center justify-between p-4'
                      onClick={() => toggleCardExpand(3)}
                    >
                      <div className='flex items-center space-x-3'>
                        <div className='rounded-lg bg-blue-50 p-2'>
                          <PlusCircle size={20} className='text-blue-500' />
                        </div>
                        <div>
                          <h4 className='font-medium'>Q2 Newsletter Content</h4>
                          <p className='text-sm text-gray-500'>
                            Draft • Started 4 hours ago
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-gray-400 transition-transform ${expandedCard === 3 ? 'rotate-180 transform' : ''}`}
                      />
                    </div>

                    {expandedCard === 3 && (
                      <div className='border-t border-gray-100 px-4 pt-2 pb-4'>
                        <div className='mb-3 rounded-lg bg-gray-50 p-3'>
                          <h5 className='mb-2 text-sm font-medium'>
                            Content Request Parameters
                          </h5>
                          <div className='grid grid-cols-2 gap-2 text-sm'>
                            <div>
                              <p className='text-gray-500'>Content Type:</p>
                              <p>Newsletter</p>
                            </div>
                            <div>
                              <p className='text-gray-500'>Target Audience:</p>
                              <p>Existing customers</p>
                            </div>
                            <div>
                              <p className='text-gray-500'>SEO Keywords:</p>
                              <p>
                                quarterly update, product features, customer
                                success
                              </p>
                            </div>
                            <div>
                              <p className='text-gray-500'>Guidelines:</p>
                              <p>Professional tone, highlight new features</p>
                            </div>
                          </div>
                        </div>

                        <button className='flex w-full items-center justify-center space-x-2 rounded bg-orange-600 px-3 py-2 text-sm text-white hover:bg-orange-700'>
                          <ArrowRight size={16} />
                          <span>Continue with Content Generation</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs would be implemented here */}
        </main>
      </div>
    </div>
  );
};

export default OverviewPage;
