        $(document).ready(function () {
            var commands = `<pre><code>$</code></pre>`
            $('#terminalOutput').html(commands);
            $('#opchForm').on('submit', function (event) {
                event.preventDefault();
                var cniValue = $('#cni').val().trim();
                if (cniValue === 'ovnk') {
                    $('#sourceField').show();
                    $('#entryPointField').hide();
                    $('#objectField1').hide();
                    $('#podField').hide();
                    var sourceValue = $('#source').val().trim();
                    if (sourceValue === 'external') {
                        $('#entryPointField').show();
                        $('#objectField1').hide();
                        $('#podField').hide();
                        $('#exitPointField').hide();
                        var entryPointValue = $('#entryPoint').val().trim();
                        if (entryPointValue === 'primaryInterface') {
                            $('#serviceTypeField').show();
                            $('#podField').hide();
                            var serviceTypeValue = $('#serviceType').val().trim();
                            if (serviceTypeValue === 'nodePort') {
                                $('#podField').show();
                                var podValue = $('#pod').val().trim();
                                if (podValue === 'podSameNode') {
                                    var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from external host
tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on primary interface (interface of br-ex bridge)
tcpdump -nn -s 0 -i &lt;primary-interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on br-ex bridge
tcpdump -nn -s 0 -i br-ex -w $&#123FILENAME&#125

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                    $('#terminalOutput').html(commands);
                                } else if (podValue === 'podDiffNode') {
                                    var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from external host
tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on primary interface (interface of br-ex bridge)
tcpdump -nn -s 0 -i &lt;primary-interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on br-ex bridge
tcpdump -nn -s 0 -i br-ex -w $&#123FILENAME&#125

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from other OpenShift node on genev_sys_6081 tunnel
tcpdump -nn -s 0 -i genev_sys_6081 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                    $('#terminalOutput').html(commands);
                                }
                            } else if (serviceTypeValue === 'externalIp') {
                                $('#podField').show();
                                var podValue = $('#pod').val().trim();
                                if (podValue === 'podSameNode') {
                                    var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from external host
tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on primary interface (interface of br-ex bridge)
tcpdump -nn -s 0 -i &lt;primary-interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on br-ex bridge
tcpdump -nn -s 0 -i br-ex -w $&#123FILENAME&#125

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                    $('#terminalOutput').html(commands);
                                } else if (podValue === 'podDiffNode') {
                                    var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from external host
tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on primary interface (interface of br-ex bridge)
tcpdump -nn -s 0 -i &lt;primary-interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on br-ex bridge
tcpdump -nn -s 0 -i br-ex -w $&#123FILENAME&#125

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from other OpenShift node on genev_sys_6081 tunnel
tcpdump -nn -s 0 -i genev_sys_6081 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                    $('#terminalOutput').html(commands);
                                }
                            }
                        } else if (entryPointValue === 'secondaryInterface') {
                            $('#serviceTypeField').show();
                            $('#podField').hide();
                            var serviceTypeValue = $('#serviceType').val().trim();
                            if (serviceTypeValue === 'nodePort') {
                                $('#podField').show();
                                var podValue = $('#pod').val().trim();
                                if (podValue === 'podSameNode') {
                                    var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from external host
tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on secondary interface (interface of br-ex bridge)
tcpdump -nn -s 0 -i &lt;seconday-interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on br-ex bridge
tcpdump -nn -s 0 -i br-ex -w $&#123FILENAME&#125

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                    $('#terminalOutput').html(commands);
                                } else if (podValue === 'podDiffNode') {
                                    var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from external host
tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on secondary interface (interface of br-ex bridge)
tcpdump -nn -s 0 -i &lt;secondary-interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on br-ex bridge
tcpdump -nn -s 0 -i br-ex -w $&#123FILENAME&#125

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from other OpenShift node on genev_sys_6081 tunnel
tcpdump -nn -s 0 -i genev_sys_6081 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                    $('#terminalOutput').html(commands);
                                }
                            } else if (serviceTypeValue === 'externalIp') {
                                $('#podField').show();
                                var podValue = $('#pod').val().trim();
                                if (podValue === 'podSameNode') {
                                    var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from external host
tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on secondary interface (interface of br-ex bridge)
tcpdump -nn -s 0 -i &lt;seconday-interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on br-ex bridge
tcpdump -nn -s 0 -i br-ex -w $&#123FILENAME&#125

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                    $('#terminalOutput').html(commands);
                                } else if (podValue === 'podDiffNode') {
                                    var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from external host
tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on secondary interface (interface of br-ex bridge)
tcpdump -nn -s 0 -i &lt;secondary-interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on br-ex bridge
tcpdump -nn -s 0 -i br-ex -w $&#123FILENAME&#125

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from other OpenShift node on genev_sys_6081 tunnel
tcpdump -nn -s 0 -i genev_sys_6081 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                    $('#terminalOutput').html(commands);
                                }
                            }
                        } else if (entryPointValue === 'route') {
                            $('#serviceTypeField').hide();
                            $('#podField').show();
                            var podValue = $('#pod').val().trim();
                            if (podValue === 'podSameNode') {
                                var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Scale down the ingresscontroller replicas to one
oc patch ingresscontroller default --type merge -p '{"spec":{"replicas":1}}'
# Or initiate request to a particular router Pod while capturing packetes
curl --resolve &lt;route-url&gt;:&lt;port&gt:&lt;router-pod-ip&gt; &lt;route-url&gt;

# Collect packets from external host
tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift router node on primary interface (interface of br-ex bridge)
tcpdump -nn -s 0 -i &lt;primary-interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                $('#terminalOutput').html(commands);
                            } else if (podValue === 'podDiffNode') {
                                var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Scale down the ingresscontroller replicas to one
oc patch ingresscontroller default --type merge -p '{"spec":{"replicas":1}}'
# Or initiate request to a particular router Pod while capturing packetes
curl --resolve &lt;route-url&gt;:&lt;port&gt:&lt;router-pod-ip&gt; &lt;route-url&gt;

# Collect packets from external host
tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift router node on primary interface (interface of br-ex bridge)
tcpdump -nn -s 0 -i &lt;primary-interface&gt; -w $&#123FILENAME&#125

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from other OpenShift node on genev_sys_6081 tunnel
tcpdump -nn -s 0 -i genev_sys_6081 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                $('#terminalOutput').html(commands);
                            }
                        } else {
                            $('#serviceTypeField').hide();
                        }
                    } else if (sourceValue === 'node') {
                        $('#objectField2').show();
                        $('#entryPointField').hide();
                        $('#exitPointField').hide();
                        $('#serviceTypeField').hide();
                        $('#podField').hide();
                        var objectValue = $('#object2').val().trim();
                        if (objectValue === 'service') {
                            $('#podField').show();
                            $('#objectField2').show();
                            var podValue = $('#pod').val().trim();
                            if (podValue === 'podSameNode') {
                                var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                $('#terminalOutput').html(commands);
                            } else if (podValue === 'podDiffNode') {
                                var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from other OpenShift node on genev_sys_6081 tunnel
tcpdump -nn -s 0 -i genev_sys_6081 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                $('#terminalOutput').html(commands);
                            }
                        } else if (objectValue === 'pod') {
                            $('#podField').show();
                            $('#objectField1').show();
                            $('#objectField2').hide();
                            var podValue = $('#pod').val().trim();
                            if (podValue === 'podSameNode') {
                                var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                $('#terminalOutput').html(commands);
                            } else if (podValue === 'podDiffNode') {
                                var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from OpenShift node on ovn-k8s-mp0 interface
tcpdump -nn -s 0 -i ovn-k8s-mp0 -w $&#123FILENAME&#125

# Collect packets from other OpenShift node on genev_sys_6081 tunnel
tcpdump -nn -s 0 -i genev_sys_6081 -w $&#123FILENAME&#125

# Collect packets from Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                $('#terminalOutput').html(commands);
                            }
                        }
                    } else if (sourceValue === 'pod') {
                        $('#objectField1').show();
                        $('#objectField2').hide();
                        $('#entryPointField').hide();
                        $('#serviceTypeField').hide();
                        $('#podField').hide();
                        var objectValue = $('#object1').val().trim();
                        if (objectValue === 'service') {
                            $('#podField').show();
                            $('#exitPointField').hide();
                            var podValue = $('#pod').val().trim();
                            if (podValue === 'podSameNode') {
                                var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from source Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from destination Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                $('#terminalOutput').html(commands);
                            } else if (podValue === 'podDiffNode') {
                                var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from source Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from other OpenShift node on genev_sys_6081 tunnel
tcpdump -nn -s 0 -i genev_sys_6081 -w $&#123FILENAME&#125

# Collect packets from destination Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                $('#terminalOutput').html(commands);
                            }
                        } else if (objectValue === 'pod') {
                            $('#podField').show();
                            $('#exitPointField').hide();
                            var podValue = $('#pod').val().trim();
                            if (podValue === 'podSameNode') {
                                var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from source Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from destination Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                $('#terminalOutput').html(commands);
                            } else if (podValue === 'podDiffNode') {
                                var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from source Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from other OpenShift node on genev_sys_6081 tunnel
tcpdump -nn -s 0 -i genev_sys_6081 -w $&#123FILENAME&#125

# Collect packets from destination Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                $('#terminalOutput').html(commands);
                            }
                        } else if (objectValue === 'egressip') {
                            $('#exitPointField').show();
                            var exitPointValue = $('#exitPoint').val().trim();
                            if (exitPointValue === 'primaryInterface') {
                                $('#podField').show();
                                var podValue = $('#pod').val().trim();
                                if (podValue === 'podSameNode') {
                                    var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from source Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from egress IP node
tcpdump -nn -s 0 -i &lt;primary-interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                    $('#terminalOutput').html(commands);
                                } else if (podValue === 'podDiffNode') {
                                    var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from source Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from other OpenShift node on genev_sys_6081 tunnel
tcpdump -nn -s 0 -i genev_sys_6081 -w $&#123FILENAME&#125

# Collect packets from egress IP node
tcpdump -nn -s 0 -i &lt;primary-interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                    $('#terminalOutput').html(commands);
                                }
                            } else if (exitPointValue === 'secondaryInterface') {
                                $('#podField').show();
                                var podValue = $('#pod').val().trim();
                                if (podValue === 'podSameNode') {
                                    var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from source Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from egress IP node on primary interface
tcpdump -nn -s 0 -i &lt;secondary-interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                    $('#terminalOutput').html(commands);
                                } else if (podValue === 'podDiffNode') {
                                    var commands = `<pre><code class="bash">$ cat opch.txt
# Use the FILENAME variable
FILENAME=/host/var/tmp/$&#123;HOSTNAME&#125;-$(date +%d-%m-%Y-%H-%M-%S-%Z).pcap

# Collect packets from source Pod
nsenter &lt;netns&gt; -- tcpdump -nn -s 0 -i &lt;interface&gt; -w $&#123FILENAME&#125

# Collect packets from other OpenShift node on genev_sys_6081 tunnel
tcpdump -nn -s 0 -i genev_sys_6081 -w $&#123FILENAME&#125

# Collect packets from egress IP node on secondary interface
tcpdump -nn -s 0 -i &lt;secondary-interface&gt; -w $&#123FILENAME&#125</code></pre>`;
                                    $('#terminalOutput').html(commands);
                                }
                            }
                        }
                    } else {
                        $('#entryPointField').hide();
                        $('#objectField1').hide();
                        $('#objectField2').hide();
                        $('#serviceTypeField').hide();
                    }
                } else {
                    $('#sourceField').hide();
                    $('#entryPointField').hide();
                    $('#objectField1').hide();
                    $('#objectField2').hide();
                    $('#serviceTypeField').hide();
                    $('#podField').hide();
                }
            });
            $('#cni, #source, #entryPoint, #serviceType, #pod, #object1, #object2 #exitPoint').on('input', function () {
                var commands = `<pre><code>$</code></pre>`
                $('#terminalOutput').html(commands);
            });
        });