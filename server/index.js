import config from './utils/config.js';
import app from './app.js';
import logger from './utils/logger.js';

const PORT = config.PORT;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
