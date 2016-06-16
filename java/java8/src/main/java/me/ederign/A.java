// @Override
//    public ServerTemplate store( final ServerTemplate serverTemplate ) {
//        logger.debug("About to store server template {}", serverTemplate);
//        final Path path = buildPath( serverTemplate.getId() );
//        if (!ioService.exists(path)) {
//            try {
//                ioService.startBatch(path.getFileSystem());
//                ioService.write(path, xs.toXML(serverTemplate));
//            } finally {
//                ioService.endBatch();
//            }
//            logger.debug("Server template {} stored successfully");
//            return serverTemplate;
//        } else {
//            throw new IllegalArgumentException("Server template with id " + serverTemplate.getId() + " is already stored");
//        }
//    }
