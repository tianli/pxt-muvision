/*
 * morpx_uart_interface.cpp
 *
 *  Created on: 2019年9月4日
 *      Author: ysq
 */

#include "DebugTool/morpx_debug_tool.h"
#include "mu_uart_interface.h"

MuUart::MuUart(hw_port_t hw_port)
    : hw_port_(hw_port) {
}

MuUart::~MuUart() {
}

size_t MuUart::available(void) {
#ifndef mbcodal
  return hw_port_->isReadable();
#else
  return 0;
#endif  // mbcodal
}

size_t MuUart::read(uint8_t* buf, unsigned int length) {
#ifndef mbcodal
  size_t ret = hw_port_->read(buf, length);
#else
  size_t ret = 0;
#endif  // mbcodal

#if MORPX_DEBUG_ENABLE && LOG_OUTPUT
  for (unsigned int i = 0; i < ret; ++i) {
    printf("0x%02x,", buf[i]);
  }
#endif
  return ret;
}

size_t MuUart::write(uint8_t* buf, unsigned int length) {
#if MORPX_DEBUG_ENABLE && LOG_OUTPUT
  for (unsigned int i = 0; i < length; ++i) {
    printf("%02x,", buf[i]);
  }
#endif

#ifndef mbcodal
  return hw_port_->send(buf, length);
#else
  return 0;
#endif  // mbcodal
}

