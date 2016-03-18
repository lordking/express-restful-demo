/**
 * Created by macos on 14/11/25.
 */

module.exports = {
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
  db : 0,
  expire: 60, 
  options: {
    detect_buffers: true
  }
}
