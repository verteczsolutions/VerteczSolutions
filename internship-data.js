// Shared internship data for the site
window.internshipData = {
  'software-development': {
    title: 'Software Development',
    icon: '💻',
    description: 'Master the art of building robust software applications with industry best practices, design patterns, and modern development methodologies.',
    curriculum: [
      { week: 1, title: 'Fundamentals & Setup', description: 'Introduction to programming concepts and environment setup', topics: ['Variables & Data Types', 'Control Flow', 'Functions & Methods'] },
      { week: 2, title: 'OOP Concepts', description: 'Deep dive into Object-Oriented Programming principles', topics: ['Classes & Objects', 'Inheritance', 'Polymorphism'] },
      { week: 3, title: 'Design Patterns', description: 'Learn industry-standard design patterns', topics: ['Creational Patterns', 'Structural Patterns', 'SOLID Principles'] },
      { week: 4, title: 'Real Projects', description: 'Build portfolio-ready applications', topics: ['Database Integration', 'Error Handling', 'Testing'] }
    ],
    timeline: [
      { title: 'Fundamentals & Setup', description: 'Introduction to programming concepts, IDE setup' },
      { title: 'Core Concepts & Assignments', description: 'Deep dive into OOP with hands-on coding' },
      { title: 'Mini Project', description: 'Real-world application combining concepts' },
      { title: 'Final Project', description: 'Capstone project showcasing skills' }
    ],
    benefits: [
      { icon: '🎯', title: 'Industry-Ready Skills', description: 'Learn skills directly applicable to real jobs' },
      { icon: '📚', title: 'Comprehensive Curriculum', description: 'From fundamentals to advanced concepts' },
      { icon: '💼', title: 'Portfolio Projects', description: 'Build projects for your portfolio' },
      { icon: '🏆', title: 'Certification', description: 'Recognized certificate upon completion' },
      { icon: '👥', title: 'Community Support', description: 'Learn with peers and mentors' },
      { icon: '⏰', title: '100% Flexible', description: 'Learn at your own pace, anytime' }
    ],
    courses: [
      {
        id: 'java-dev', name: 'Java Development', icon: '☕', duration: '4 weeks',
        description: 'Build robust applications using Java with OOP concepts and design patterns',
        curriculum: [], timeline: [], benefits: []
      },
      { id: 'python-dev', name: 'Python Programming', icon: '🐍', duration: '4 weeks', description: 'Learn Python programming from basics to advanced applications', curriculum: [], timeline: [], benefits: [] },
      { id: 'csharp-dev', name: 'C# Development', icon: '⚙️', duration: '4 weeks', description: 'Build Windows and web applications using C# and .NET', curriculum: [], timeline: [], benefits: [] },
      { id: 'cpp-dev', name: 'C++ Development', icon: '🔧', duration: '4 weeks', description: 'Master C++ for high-performance and system-level programming', curriculum: [], timeline: [], benefits: [] }
    ]
  },
  'web-development': {
    title: 'Web Development',
    icon: '🌐',
    description: 'Build stunning, responsive websites and web applications with modern technologies, frameworks, and best practices.',
    curriculum: [
      { week: 1, title: 'Frontend Fundamentals', description: 'Master HTML, CSS, and JavaScript basics', topics: ['HTML5 Semantics', 'CSS Layouts', 'JavaScript Basics'] },
      { week: 2, title: 'Responsive Design', description: 'Create mobile-first responsive layouts', topics: ['Media Queries', 'Flexbox', 'Grid Layout'] },
      { week: 3, title: 'Modern Frameworks', description: 'Learn popular frontend frameworks', topics: ['React Basics', 'Component Architecture', 'State Management'] },
      { week: 4, title: 'Real Projects', description: 'Build portfolio-ready web applications', topics: ['API Integration', 'Deployment', 'Best Practices'] }
    ],
    timeline: [
      { title: 'HTML & CSS Mastery', description: 'Build beautiful semantic HTML with modern CSS' },
      { title: 'JavaScript Essentials', description: 'Master JavaScript and DOM manipulation' },
      { title: 'Framework Deep Dive', description: 'Learn React with real-world applications' },
      { title: 'Full Website Project', description: 'Build complete production-ready website' }
    ],
    benefits: [
      { icon: '🎨', title: 'Creative Freedom', description: 'Build beautiful interfaces' },
      { icon: '📱', title: 'Responsive Design', description: 'Master mobile-first development' },
      { icon: '⚡', title: 'Modern Tech Stack', description: 'Learn latest frameworks' },
      { icon: '🌍', title: 'Live Websites', description: 'Deploy projects to internet' },
      { icon: '💡', title: 'Problem Solving', description: 'Develop unique solutions' },
      { icon: '🚀', title: 'Career Ready', description: 'Join most in-demand field' }
    ],
    courses: [
      { id: 'frontend', name: 'Frontend Development', icon: '🎨', duration: '4 weeks', description: 'Master HTML, CSS, JavaScript and modern frontend frameworks', curriculum: [], timeline: [], benefits: [] },
      { id: 'fullstack', name: 'Full Stack Development', icon: '🔗', duration: '4 weeks', description: 'Master both frontend and backend development', curriculum: [], timeline: [], benefits: [] },
      { id: 'mobile-web', name: 'Mobile Web Development', icon: '📱', duration: '4 weeks', description: 'Build responsive mobile web applications', curriculum: [], timeline: [], benefits: [] },
      { id: 'backend', name: 'Backend Development', icon: '⚙️', duration: '4 weeks', description: 'Build scalable backend systems and APIs', curriculum: [], timeline: [], benefits: [] }
    ]
  },
  'data-science': {
    title: 'Data Science',
    icon: '📊',
    description: 'Transform raw data into actionable insights with advanced analytics, visualization techniques, and statistical methods.',
    curriculum: [
      { week: 1, title: 'Python & Data Basics', description: 'Learn Python and fundamental data concepts', topics: ['Python Essentials', 'NumPy Basics', 'Pandas Introduction'] },
      { week: 2, title: 'Data Analysis', description: 'Analyze and explore data effectively', topics: ['EDA Techniques', 'Statistical Analysis', 'Data Visualization'] },
      { week: 3, title: 'Advanced Analytics', description: 'Apply advanced data science techniques', topics: ['Regression Models', 'Classification', 'Clustering'] },
      { week: 4, title: 'Real Datasets', description: 'Work with real-world datasets', topics: ['Data Pipeline', 'Statistical Testing', 'Insights'] }
    ],
    timeline: [
      { title: 'Python & Tools Setup', description: 'Learn Python for data science' },
      { title: 'Data Exploration', description: 'Master EDA and visualization' },
      { title: 'Statistical Methods', description: 'Apply statistical analysis' },
      { title: 'Capstone Project', description: 'Complete data science project' }
    ],
    benefits: [
      { icon: '📈', title: 'Data-Driven Decisions', description: 'Make decisions based on data' },
      { icon: '🔍', title: 'Pattern Recognition', description: 'Discover hidden patterns' },
      { icon: '📊', title: 'Visualization Mastery', description: 'Create compelling visualizations' },
      { icon: '🤖', title: 'ML Foundation', description: 'Strong ML foundation' },
      { icon: '💰', title: 'High Demand', description: 'Highest-paying tech roles' },
      { icon: '🎯', title: 'Impact Driven', description: 'See direct impact of work' }
    ],
    courses: [
      { id: 'data-analysis', name: 'Data Analysis', icon: '📈', duration: '4 weeks', description: 'Learn exploratory data analysis and visualization', curriculum: [], timeline: [], benefits: [] },
      { id: 'data-eng', name: 'Data Engineering', icon: '🔄', duration: '4 weeks', description: 'Build data pipelines and manage big data', curriculum: [], timeline: [], benefits: [] },
      { id: 'bi', name: 'Business Intelligence', icon: '📊', duration: '4 weeks', description: 'Create dashboards and business reports', curriculum: [], timeline: [], benefits: [] }
    ]
  },
  'machine-learning': {
    title: 'Machine Learning',
    icon: '🤖',
    description: 'Develop AI-powered solutions using cutting-edge machine learning algorithms, models, and real-world datasets.',
    curriculum: [
      { week: 1, title: 'ML Fundamentals', description: 'Introduction to machine learning concepts', topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'] },
      { week: 2, title: 'Classic Algorithms', description: 'Master traditional ML algorithms', topics: ['Linear Regression', 'Decision Trees', 'Random Forest'] },
      { week: 3, title: 'Advanced Techniques', description: 'Learn advanced ML methods', topics: ['Ensemble Methods', 'Hyperparameter Tuning', 'Cross Validation'] },
      { week: 4, title: 'Real Projects', description: 'Build ML solutions on real datasets', topics: ['Model Deployment', 'Performance Metrics', 'Applications'] }
    ],
    timeline: [
      { title: 'ML Fundamentals', description: 'Understand core ML concepts' },
      { title: 'Algorithm Implementation', description: 'Implement with Scikit-learn' },
      { title: 'Model Optimization', description: 'Tune models for better performance' },
      { title: 'Production Project', description: 'Deploy ML solution to production' }
    ],
    benefits: [
      { icon: '🤖', title: 'AI Future Ready', description: 'Build future with AI' },
      { icon: '🧠', title: 'Advanced Algorithms', description: 'Master ML techniques' },
      { icon: '📈', title: 'Predictive Power', description: 'Build predictive models' },
      { icon: '💼', title: 'Enterprise Solutions', description: 'Real business solutions' },
      { icon: '🏆', title: 'Elite Skills', description: 'Join top tech professionals' },
      { icon: '🚀', title: 'Innovation Leader', description: 'Be part of AI revolution' }
    ],
    courses: [
      { id: 'ml-basics', name: 'Machine Learning Basics', icon: '🧠', duration: '4 weeks', description: 'Master fundamental machine learning concepts', curriculum: [], timeline: [], benefits: [] },
      { id: 'deep-learning', name: 'Deep Learning', icon: '🧬', duration: '4 weeks', description: 'Learn neural networks and deep learning frameworks', curriculum: [], timeline: [], benefits: [] },
      { id: 'nlp', name: 'Natural Language Processing', icon: '💬', duration: '4 weeks', description: 'Process and analyze human language with NLP', curriculum: [], timeline: [], benefits: [] }
    ]
  }
};

// Populate missing course-level curriculum/timeline/benefits from domain defaults
Object.keys(window.internshipData).forEach(domainKey => {
  const domain = window.internshipData[domainKey];
  domain.courses.forEach(course => {
    if ((!course.curriculum || course.curriculum.length === 0) && domain.curriculum) course.curriculum = domain.curriculum;
    if ((!course.timeline || course.timeline.length === 0) && domain.timeline) course.timeline = domain.timeline;
    if ((!course.benefits || course.benefits.length === 0) && domain.benefits) course.benefits = domain.benefits;
  });
});
