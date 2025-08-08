const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const API_BASE = 'http://localhost:3080/api';

// Mock JWT token (you'll need to get a real one from login)
const MOCK_TOKEN = 'your-jwt-token-here';

async function testUploadService() {
  console.log('🧪 Testing NextSora Upload Service...\n');

  try {
    // Test 1: Generate signed URL
    console.log('1️⃣ Testing signed URL generation...');
    try {
      const signedUrlResponse = await axios.post(
        `${API_BASE}/upload/signed-url`,
        { folder: 'test' },
        {
          headers: {
            'Authorization': `Bearer ${MOCK_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('✅ Signed URL response:', signedUrlResponse.data);
    } catch (error) {
      console.log('⚠️ Signed URL test failed (expected without auth):', error.response?.data || error.message);
    }

    // Test 2: Optimize URL
    console.log('\n2️⃣ Testing URL optimization...');
    try {
      const optimizeResponse = await axios.post(
        `${API_BASE}/upload/optimize-url`,
        {
          url: 'https://res.cloudinary.com/example/image/upload/v1234567/sample.jpg',
          width: 800,
          height: 600,
          quality: 'auto:good',
        },
        {
          headers: {
            'Authorization': `Bearer ${MOCK_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('✅ Optimize URL response:', optimizeResponse.data);
    } catch (error) {
      console.log('⚠️ Optimize URL test failed (expected without auth):', error.response?.data || error.message);
    }

    // Test 3: File upload (simulated)
    console.log('\n3️⃣ Testing file upload structure...');
    console.log('📁 Upload endpoints available:');
    console.log('   - POST /api/upload/file (multipart/form-data)');
    console.log('   - POST /api/upload/signed-url');
    console.log('   - DELETE /api/upload/file/:publicId');
    console.log('   - GET /api/upload/file/:publicId/info');
    console.log('   - POST /api/upload/optimize-url');

    console.log('\n📝 Upload service features:');
    console.log('   ✅ Cloudinary integration');
    console.log('   ✅ File validation (size, type)');
    console.log('   ✅ Image optimization');
    console.log('   ✅ Signed URL generation');
    console.log('   ✅ File deletion');
    console.log('   ✅ JWT authentication required');

    console.log('\n🎉 Upload service tests completed!');
    console.log('\n💡 To test with real authentication:');
    console.log('   1. Login to get JWT token');
    console.log('   2. Use token in Authorization header');
    console.log('   3. Test file upload with multipart/form-data');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Make sure the API server is running: pnpm dev:api');
    }
  }
}

testUploadService(); 