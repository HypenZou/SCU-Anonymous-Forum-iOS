#import "exit.h"

@implementation Exit

- (void)exit:(CDVInvokedUrlCommand *)command {
  exit(0);
}

@end
