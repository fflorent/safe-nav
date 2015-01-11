/**
 * Copyright © 2014 Florent Fayolle
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

macroclass greedy_prop_chain {
  // identifier(arguments...)
  pattern {
    rule {$chain:($id:ident($args...))}
  }
  // identifier[arguments...]
  pattern {
    rule {$chain:($id:ident[$args...])}
  }
  // (Default) identifier
  pattern {
    rule {$chain:($id:ident)}
  }
}

// Define the "?." operator
macro (?.) {
  // Support syntax of this form: a?.b
  rule infix { $lhs:expr | $rhs:greedy_prop_chain(.)... } => {
    (function() {
      var lhs = $lhs;
      return lhs != null ? lhs.$rhs$chain(.)... : lhs;
    })()
  }
}

export (?.)

// Redefine the "?" operator
let (?) = macro {
  // nullable?(args1, arg2, ...)
  rule infix { $lhs | ($args ...) } => {
    // if lhs is not a function, return
    ($lhs || function(){})($args ...)
  }
  // Default (just
  rule {} => { ? }
}

export (?)
