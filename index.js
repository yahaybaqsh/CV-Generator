import React, { useState } from 'react';

// مكون المعلومات الشخصية - تصميم احترافي
const PersonalInfo = ({ personalData, isEditing, onInputChange }) => {
  if (!isEditing) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-800">المعلومات الشخصية</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">الاسم الكامل</label>
            <p className="text-lg font-medium text-gray-900">{personalData.fullName || 'غير محدد'}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">البريد الإلكتروني</label>
            <p className="text-lg font-medium text-gray-900">{personalData.email || 'غير محدد'}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">رقم الهاتف</label>
            <p className="text-lg font-medium text-gray-900">{personalData.phone || 'غير محدد'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
      <div className="flex items-center mb-6">
        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
        <h2 className="text-2xl font-bold text-gray-800">المعلومات الشخصية</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">الاسم الكامل</label>
          <input
            type="text"
            name="fullName"
            value={personalData.fullName}
            onChange={onInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="أدخل اسمك الكامل"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            value={personalData.email}
            onChange={onInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="example@email.com"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">رقم الهاتف</label>
          <input
            type="tel"
            name="phone"
            value={personalData.phone}
            onChange={onInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="+966 5X XXX XXXX"
          />
        </div>
      </div>
    </div>
  );
};

// مكون التعليم - تصميم احترافي
const Education = ({ educationData, isEditing, onInputChange }) => {
  if (!isEditing) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-800">التعليم</h2>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-gray-50 rounded-lg">
            <div className="mb-3 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900">{educationData.institution || 'غير محدد'}</h3>
              <p className="text-gray-600">{educationData.major || 'غير محدد'}</p>
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {educationData.startDate ? new Date(educationData.startDate).getFullYear() : 'غير محدد'} - {educationData.endDate ? new Date(educationData.endDate).getFullYear() : 'غير محدد'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
      <div className="flex items-center mb-6">
        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
        <h2 className="text-2xl font-bold text-gray-800">التعليم</h2>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">المؤسسة التعليمية</label>
            <input
              type="text"
              name="institution"
              value={educationData.institution}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="اسم الجامعة أو المؤسسة"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">التخصص</label>
            <input
              type="text"
              name="major"
              value={educationData.major}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="التخصص الأكاديمي"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ البدء</label>
            <input
              type="date"
              name="startDate"
              value={educationData.startDate}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ الانتهاء</label>
            <input
              type="date"
              name="endDate"
              value={educationData.endDate}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// مكون الخبرة العملية - تصميم احترافي
const Experience = ({ experienceData, isEditing, onInputChange }) => {
  if (!isEditing) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-800">الخبرة العملية</h2>
        </div>
        <div className="space-y-4">
          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{experienceData.company || 'غير محدد'}</h3>
              <span className="text-sm text-gray-500">
                {experienceData.startDate ? new Date(experienceData.startDate).getFullYear() : 'غير محدد'} - {experienceData.endDate ? new Date(experienceData.endDate).getFullYear() : 'غير محدد'}
              </span>
            </div>
            <p className="text-purple-600 font-medium mb-2">{experienceData.position || 'غير محدد'}</p>
            <p className="text-gray-700 leading-relaxed">{experienceData.responsibilities || 'غير محدد'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
      <div className="flex items-center mb-6">
        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
        <h2 className="text-2xl font-bold text-gray-800">الخبرة العملية</h2>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">اسم الشركة</label>
            <input
              type="text"
              name="company"
              value={experienceData.company}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="اسم الشركة أو المؤسسة"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">المسمى الوظيفي</label>
            <input
              type="text"
              name="position"
              value={experienceData.position}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              placeholder="المسمى الوظيفي"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">المسؤوليات والمهام</label>
          <textarea
            name="responsibilities"
            value={experienceData.responsibilities}
            onChange={onInputChange}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="صف المسؤوليات والمهام التي قمت بها في هذا المنصب..."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ البدء</label>
            <input
              type="date"
              name="startDate"
              value={experienceData.startDate}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ الانتهاء</label>
            <input
              type="date"
              name="endDate"
              value={experienceData.endDate}
              onChange={onInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// المكون الرئيسي - تصميم احترافي
const App = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [education, setEducation] = useState({
    institution: '',
    major: '',
    startDate: '',
    endDate: ''
  });
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: ''
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducation(prev => ({ ...prev, [name]: value }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setExperience(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!personalInfo.fullName.trim()) {
      alert('يرجى إدخال الاسم الكامل');
      return;
    }
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleReset = () => {
    setPersonalInfo({ fullName: '', email: '', phone: '' });
    setEducation({ institution: '', major: '', startDate: '', endDate: '' });
    setExperience({ company: '', position: '', responsibilities: '', startDate: '', endDate: '' });
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            منشئ السيرة الذاتية الاحترافية
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            أنشئ سيرتك الذاتية باحترافية وسهولة، واحصل على تصميم عصري يعكس مهاراتك وخبراتك
          </p>
        </div>

        {/* أزرار التحكم */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {isEditing ? (
            <>
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-48"
              >
                <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                عرض السيرة الذاتية
              </button>
              <button
                onClick={handleReset}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-48"
              >
                <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                إعادة تعيين
              </button>
            </>
          ) : (
            <button
              onClick={handleEdit}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-48"
            >
              <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              تعديل البيانات
            </button>
          )}
        </div>

        {/* محتوى السيرة الذاتية */}
        <div className="space-y-8">
          <PersonalInfo
            personalData={personalInfo}
            isEditing={isEditing}
            onInputChange={handlePersonalInfoChange}
          />
          
          <Education
            educationData={education}
            isEditing={isEditing}
            onInputChange={handleEducationChange}
          />
          
          <Experience
            experienceData={experience}
            isEditing={isEditing}
            onInputChange={handleExperienceChange}
          />
        </div>

        {/* رسالة توجيهية */}
        {isEditing && (
          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-xl shadow-lg p-6 max-w-2xl">
              <div className="flex items-center justify-center mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">نصيحة احترافية</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                تأكد من إدخال معلومات دقيقة وواضحة. استخدم أفعال العمل القوية في وصف المسؤوليات، 
                وكن محدداً في تواريخ الخبرات والتعليم لتعزيز مصداقية سيرتك الذاتية.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
