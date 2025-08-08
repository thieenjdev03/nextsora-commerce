const axios = require('axios');

const API_BASE = 'http://localhost:3001/api';

async function testLogging() {
  console.log('🧪 Testing NextSora API Logging & Interceptors...\n');

  try {
    // Test 1: Health check
    console.log('1️⃣ Testing health check...');
    const healthResponse = await axios.get(`${API_BASE}/health`);
    console.log('✅ Health check response:', healthResponse.data);
    console.log('📊 Response format:', {
      success: healthResponse.data.success,
      hasData: !!healthResponse.data.data,
      hasTimestamp: !!healthResponse.data.timestamp,
      hasPath: !!healthResponse.data.path,
    });

    // Test 2: Basic endpoint
    console.log('\n2️⃣ Testing basic endpoint...');
    const helloResponse = await axios.get(`${API_BASE}/`);
    console.log('✅ Hello response:', helloResponse.data);

    // Test 3: Error endpoint (should fail)
    console.log('\n3️⃣ Testing error logging...');
    try {
      await axios.get(`${API_BASE}/test-error`);
    } catch (error) {
      console.log('✅ Error response received:', {
        status: error.response.status,
        success: error.response.data.success,
        message: error.response.data.message,
        hasTimestamp: !!error.response.data.timestamp,
        hasPath: !!error.response.data.path,
      });
    }

    // Test 4: Non-existent endpoint
    console.log('\n4️⃣ Testing 404 error...');
    try {
      await axios.get(`${API_BASE}/non-existent`);
    } catch (error) {
      console.log('✅ 404 response received:', {
        status: error.response.status,
        success: error.response.data.success,
        message: error.response.data.message,
      });
    }

    console.log('\n🎉 All tests completed!');
    console.log('\n📝 Check logs directory for log files:');
    console.log('   - logs/combined.log (all logs)');
    console.log('   - logs/error.log (error logs only)');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Make sure the API server is running: pnpm dev:api');
    }
  }
}

testLogging(); 